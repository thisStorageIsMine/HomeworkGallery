const links = document.querySelectorAll(".download-link");


links.forEach(link => {
    link.addEventListener("click", downloadFile);
})
function downloadFile(event) {
    
    // const fileToDownlaod = this.parentNode.href;

    //Заставиить браузер скачать файл
    const fileUrl = this.parentNode.href;
  
    const fileName = fileUrl.split('/').pop();
  
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
  
    document.body.appendChild(a);
    
    // Создаем объект File из ссылки
    const file = new File([fileUrl], fileName, {type: 'text/plain'});
    
    // Генерируем объект URL
    const fileURL = URL.createObjectURL(file); 
    
    // Устанавливаем сгенерированный URL
    a.href = fileURL;
    
    a.click();
  
    // Очищаем объект URL
    URL.revokeObjectURL(fileURL);  
    
    a.remove();
}

