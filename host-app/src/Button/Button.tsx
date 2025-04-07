interface IbtnProps {
  onClick: () => void;
  text: string;
}

export const Button = ({ onClick, text }: IbtnProps) => {
  return <button onClick={onClick}>{text}</button>;
};
