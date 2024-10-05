

const useInitialTime = () => {
  const entryDrive: Date = new Date();
  const entryDate:string = entryDrive.toLocaleDateString('es-ES',{
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const exitDrive:Date = new Date();
  exitDrive.setDate(exitDrive.getDate()+2);
  const exitDate:string = exitDrive.toLocaleDateString('es-ES',{
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  return {entryDate, exitDate}
}

export default useInitialTime;