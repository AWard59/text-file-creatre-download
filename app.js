function saveTextAsFile(text, fileName, fileType) {
  let textFileAsBlob = new Blob([text], { type: fileType })
  let downloadLink = document.createElement('a')
  downloadLink.download = fileName
  downloadLink.innerHTML = 'Download File'

  if (window.URL != null) {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
    downloadLink.style.display = 'none'
    document.body.appendChild(downloadLink)
  }

  downloadLink.click()

}