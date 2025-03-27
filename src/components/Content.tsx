function Content({ content, toggle }: any) {
  return (
    <div className={`${toggle}-content content`}>
      <h1>Some Facts about React</h1>
      <ul className="content_items">
        {content.map((liItem: string, index: number) => (
          <li key={index}>{liItem}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
