function saveTextAsFile(text, fileName, type = "text/plain") {

  Object.assign(document.createElement('a'), {
    download: fileName,
    href: URL.createObjectURL(new Blob([text], { type }))
  }).click()
  
}

saveTextAsFile('Hello World!', 'hello.txt', 'text/plain')