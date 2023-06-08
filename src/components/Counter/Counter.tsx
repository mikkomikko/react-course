interface Props {
  count: number;
}

export default function Counter({ count }: Props) {
  return <div className="text-5xl font-bold">{count}</div>;
}
