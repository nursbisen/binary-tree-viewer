import Tree from "react-d3-tree";

import useContainer from "./hook";

const BinaryTreeViewer = () => {
  const { treeData } = useContainer();

  return (
    <Tree
      data={treeData}
      orientation="vertical"
      pathFunc="straight"
      translate={{ x: 650, y: 100 }}
    />
  );
};

export default BinaryTreeViewer;