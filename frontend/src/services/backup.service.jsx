import axios from "axios";

export async function BackupService() {
  try {
    const response = await axios.get("https://monitoria-fb90.onrender.com/backup", {
      responseType: 'blob', 
    });

    if (response.status === 200) {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'backup.xlsx'; 
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    } else {
      console.error('Erro ao realizar o backup. Status:', response.status);
    }
  } catch (error) {
    console.error('Erro ao realizar o backup:', error);
  }
}
