import { useCallback, useEffect, useState } from 'react';
import { FileNode, root } from './data';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

const File: React.FC<FileNode> = ({ id, descricao, filhas }: FileNode) => {
  const [showFilhas, setShowFilhas] = useState<boolean>(false);
  const [selecionado, setSelecionado] = useState<boolean>(false);

  let todasFuncionalidades = [];
  let listaAutorizacao = [0, 1, 2, 3, 4, 5]

  function selectAll(dados: any) {
    todasFuncionalidades.push(dados.id)
    for (let f of dados.filhas) {
      selectAll(f);
    }
  }

  const selectAllFolder = (filhas: any) => {
    setSelecionado(!selecionado);
  }

  const handleClick = useCallback(() => {
    setShowFilhas(!showFilhas);
  }, [showFilhas, setShowFilhas]);

  useEffect(() => {
    selectAll(root);
  });

  const verificarMatch = todasFuncionalidades.some(el => listaAutorizacao.includes(el));

  console.log(verificarMatch);

  return (
    <div>
      {/* Abre a lista */}
      <span>{showFilhas ? <FcOpenedFolder size={20} onClick={handleClick} /> : filhas.length <= 0 ? <HiOutlineClipboardCheck size={20} color={selecionado ? 'green' : 'red'} /> : <FcFolder size={20} onClick={handleClick} />}</span>
      {/* Abre a lista */}

      {/* Selecionar todas */}
      <span onClick={() => selectAllFolder(filhas)} style={{ fontWeight: showFilhas ? 'bold' : 'normal', cursor: 'pointer' }}>
        {descricao == 'root' ? ' Sistema de Trânsito' : descricao}
      </span>
      {/* Selecionar todas */}

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', borderLeft: '1px dashed', paddingLeft: 15 }}>
        {showFilhas && (filhas ?? []).map((node: FileNode) => <File {...node} />)}
      </div>
    </div>
  );
}

function CustomizedTreeView() {

  return (
    <div style={{ paddingLeft: 45, paddingTop: 15, paddingBottom: 15, border: '1px solid #ccc' }}>
      <File {...root} />
    </div>
  )
}

export default CustomizedTreeView;
