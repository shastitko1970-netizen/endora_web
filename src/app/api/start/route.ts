import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, telegram, comment } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const adminIdsEnv = process.env.TELEGRAM_ADMIN_CHAT_IDS;

    if (!token || !adminIdsEnv) {
      console.error("[start] Missing Telegram env variables");
      return NextResponse.json(
        { ok: false, error: "Telegram config is missing on the server" },
        { status: 500 }
      );
    }

    const adminIds = adminIdsEnv
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);

    const lines = [
      "🆕 Новая заявка с сайта Endora AI",
      "",
      `👤 Имя: ${name}`,
      `📞 Телефон: ${phone}`,
      `✉️ Почта: ${email}`,
      telegram ? `💬 Telegram: ${telegram}` : "",
      comment ? "" : "",
      comment ? `📝 Комментарий:\n${comment}` : "",
      "",
      "Заявка с формы «Начать» на сайте.",
    ].filter(Boolean);

    const text = lines.join("\n");
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const results = await Promise.all(
      adminIds.map(async (chatId) => {
        const tgRes = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
          }),
        });

        const tgData = await tgRes.json();
        if (!tgData.ok) {
          console.error("[start] Telegram error", chatId, tgData);
        }
        return tgData.ok as boolean;
      })
    );

    const anyFail = results.some((ok) => !ok);
    if (anyFail) {
      return NextResponse.json(
        { ok: false, error: "Не удалось отправить сообщение в Telegram." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[start] API error", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
