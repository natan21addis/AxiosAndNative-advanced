export const requestInterceptor=config=>{

   const accessToken='';
   if(accessToken!=null){
      config.header['x-auth']=accessToken;
   }
   console.log('header:',config.header);
   console.log('methods:',config.method);
   console.log('URL:',config.baseUrl + config.url);
   return config;

}

export const responseInterceptor=config=>{
console.log("request...");
console.log("Header:",config.config.header);
console.log("method:",config.config.method);
console.log("url:",config.config.baseUrl + config.config.url);

console.log('response....');
console.log("status:",config.status);
console.log("resonse:",config.data);

return config;

}

export const responseErrorHandler=error=>{
   const originalConfig=error.config;
   if(error?.response?.status===401 && !originalConfig._retry){
      console.log('user is unautherized');
   }
   alert(error);
   return Promise.reject(error);
}
export const requestErrorHandler=error=>{
   return Promise.reject(error);
};