import { useRef } from "react"

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()
  return (
    <>
        <h1>Signup</h1> 
        <form>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" ref={emailRef} required/ >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" ref={passwordRef} required/>
  </div>
  <div class="mb-3">
    <label for="passwordConf" class="form-label">Password</label>
    <input type="password" class="form-control" id="passwordConf" ref={passwordConfRef}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default Signup