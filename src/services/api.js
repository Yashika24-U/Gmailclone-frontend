 import axios from 'axios'

//  const requestConfig = {
//     url: 'https://jsonplaceholder.typicode.com/posts', // Replace with your API endpoint
//     method: 'post',
//     data: {
//       title: 'My Post Title',
//       body: 'This is the content of my post.',
//       userId: 1
//     }
//   };
  
//   axios(requestConfig)
//     .then(response => {
//       console.log('Response:', response.data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
  


const API_URL = 'http://localhost:9000';

const API_GMAIL = async (urlObject,payload,type)=>{
    //console.log(urlObject.method) 
    //console.log( ),
   console.log(payload)
  //  console.log("Testing",type)

   return await axios({   

        // url:`${API_URL}/${urlObject.endpoint}/${type}`,
        method :urlObject.method ,
        url:`http://localhost:9000/${urlObject.endpoint}/${type}`,
       
        // // in  url we  have to backend ka url
        
        // //for post api we are adding payload data{}
       
        data:payload,
           
           
              
           
        

       

    });
}
export default API_GMAIL;



// I will not directly call to this API_GMAIL,so I am going to create a middleware
// that middleware and we pass info in middleware nd it  will call this cuz  and 
//middleware is imp
//in short it will call to middleware and perform operartion and that will call api




// const API_GMAIL = async (urlObject,payload)=>{
//     return await axios,('http://localhost:9000/api /save'{
 
            
//          method : urlObject.method,
//          // // in  url we  have to backend ka url
//           url:`${API_URL}/${urlObject.endpoint}`,
//          // //for post api we are adding payload data{}
//          data : payload,
 
//      });
//  }













 