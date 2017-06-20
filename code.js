var promise = $.ajax({
  method: 'post',
  url: 'http://www.mocky.io/v2/59498b64120000770c272896',
  data: {
    test: 1
  }
}).then(function (result) {
  console.log('result', result)
}).catch(function (err) {
  console.log('error')
})
