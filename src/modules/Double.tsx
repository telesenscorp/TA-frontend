interface Props extends Content.Double, Content.Empty {
  children: [any, any];
}
function Double({ bg, bgTop }: Props) {
  return (
    <div className="double-container">
      <div className="double-col"></div>
      <div className="double-col"></div>
    </div>
  );
}
export default Double;
