async function fileToBinary(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = () => {
        const arrayBuffer = fileReader.result;
        const uint8Array = new Uint8Array(arrayBuffer);
  
        resolve(uint8Array);
      };
      fileReader.onerror = reject;
    });
  }
  
  export { fileToBinary };
  