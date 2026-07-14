import "./NoticeCall.css";

const colorMap: Record<string, string> = {
  blue: "#4da3ff",
  ao: "#4da3ff",
  あお: "#4da3ff",

  pink: "#ff8acb",
  ピンク: "#ff8acb",

  yellow: "#ffe45c",
  黄色: "#ffe45c",
  きいろ: "#ffe45c",
};

type Props = {
  params: Promise<{
    color: string;
    number: string;
  }>;
};

export default async function NoticeCall({ params }: Props) {
  const { color, number } = await params;

  const backgroundColor = colorMap[color] ?? "#ffffff";

  return (
    <div
      className="notice-call-page"
      style={{ backgroundColor }}
    >
      <div className="notice-number">{number}</div>
    </div>
  );
}