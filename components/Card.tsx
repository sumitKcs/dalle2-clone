type data = {
  key: string;
  postData: { id: string; name: string };
};

function Card({ key, postData }: data ) {
  return (
    <>
      <div>Card</div>
    </>
  );
}

export default Card;
