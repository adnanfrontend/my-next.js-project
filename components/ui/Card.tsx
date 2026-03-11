interface Props {
  title: string;
  body: string;
}

export default function Card({ title, body }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}