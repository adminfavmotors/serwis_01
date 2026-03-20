import { NextResponse } from "next/server";

interface ContactPayload {
  fullName: string;
  phone: string;
  vehicle: string;
  problem: string;
  preferredDate: string;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramBotToken || !telegramChatId) {
    console.log("MotoFix contact fallback:", payload);

    return NextResponse.json({ success: true });
  }

  const text = [
    "Nowe zgloszenie MotoFix Serwis",
    `Imie i nazwisko: ${payload.fullName}`,
    `Telefon: ${payload.phone}`,
    `Marka i model: ${payload.vehicle}`,
    `Opis problemu: ${payload.problem}`,
    `Preferowany termin: ${payload.preferredDate}`,
  ].join("\n");

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text,
      }),
      cache: "no-store",
    },
  );

  if (!telegramResponse.ok) {
    const errorText = await telegramResponse.text();

    return NextResponse.json(
      { success: false, error: errorText || "Telegram request failed." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
