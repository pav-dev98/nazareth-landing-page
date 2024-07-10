// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const helloAPI = (req, res) =>{
  
  if(req.method !== 'POST'){
    console.log('body', req.body)
    return res.status(200).json({message: 'test end point'})
  }
  return res.status(200).json({ name: 'John Doe' })
}

export default helloAPI;