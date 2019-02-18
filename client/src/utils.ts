export const downloadVideos = async (urls: string[]) => {
  const response = await fetch('http://localhost:8001/download/mp3', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(urls),
  });
  const fileBlob = await response.blob();

  const zipURL = URL.createObjectURL(fileBlob);
  const windowDownload = document.createElement('a');
  windowDownload.href = zipURL;
  windowDownload.setAttribute('download', 'musics.zip');
  windowDownload.click();
};
