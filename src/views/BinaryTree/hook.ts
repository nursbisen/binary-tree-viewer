import { useEffect } from "react";

import useBinaryTree from "../../hooks/useBinaryTree";
import { binaryTreeToTreeViewer, getRandomNum } from "../../utils/helpers";

const useContainer = () => {
  const { binaryTree, addNewNode } = useBinaryTree();

  useEffect(() => {
    const handleClickSpace = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        addNewNode(getRandomNum());
      }
    };

    document.addEventListener('keydown', handleClickSpace);

    return () => {
      document.removeEventListener('keydown', handleClickSpace);
    }
  }, [addNewNode, getRandomNum]);

  const treeData = binaryTree
    ? binaryTreeToTreeViewer(binaryTree)
    : { name: 'Нажмите на пробел чтобы сгенерировать случайное число' };

  return {
    treeData,
  };
};


export default useContainer;