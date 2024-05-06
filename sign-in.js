function signIn() {
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  let form = document.createElement('form')
  form.setAttribute('method','get')
  form.setAttribute('action', oauth2Endpoint)

  let params ={
    "clint_id":"",
    "redirect_uri":"",
    "response_type":"token",
    "scope":"http://www.googleapis.com/auth/userinfo.profile",
    "include_granted_scopes":'true',
    'state':'pass-through-value'
  }

  for(var p in params){
  let input = document.createElement('input')
  input.setAttribute('type','hidden')
  input.setAttribute('name',p)
  input.setAttribute('value',params[p])
  form.appendChild(input)
  }

  document.appendChild(form)
  form.submit()
}
