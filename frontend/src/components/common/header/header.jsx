import { useState } from "react";
import { Head, Navigation, IconButton } from "./style";
import { MdDashboard, MdOutlineDifference, MdViewList, MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import { Link, useLocation } from "react-router-dom";
import { BackupService } from "../../../services/backup.service";

const isActive = (currentPath, path) => {
  return currentPath === path ? 'active' : '';
};

export default function Header() {
  const location = useLocation();
  const [count, setCount] = useState(1);

  function handleClick() {
    if (count == 1) {
      setCount(count + 1);
      console.log(count)
    } else {
      setCount(count - 1);
      console.log(count)

    }
  }
  const handleBackup = async () => {
    try {
      // Chame sua função de backup aqui, por exemplo:
      const response = await BackupService();
      console.log('Backup realizado com sucesso:', response);
    } catch (error) {
      console.error('Erro ao realizar o backup:', error);
    }
  };
  
  return (
    <Head count={count}>
      <Navigation>
        <Link to="/" className={isActive(location.pathname, "/")}>
          <MdDashboard />
          <span>Dashboard</span>
        </Link>
        <Link to="/register" className={isActive(location.pathname, "/register")}>
          <MdOutlineDifference />
          <span>Cadastro</span>
        </Link>
        <Link to="/list" className={isActive(location.pathname, "/list")}>
          <MdViewList />
          <span>Patrimonio</span>
        </Link>
        <Link>
          <MdViewList />
          <button onClick={handleBackup}>Backup</button>
        </Link>
      </Navigation>
      <IconButton onClick={handleClick}>{count == 1 ? <MdNavigateBefore /> : <MdNavigateNext />}</IconButton>
    </Head >
  );
}