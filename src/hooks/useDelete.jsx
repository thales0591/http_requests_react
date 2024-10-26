// import { useEffect } from 'react'

// export const useDelete = (url, id, item) => {

//     useEffect(() => {

//         const deleteFetch = async () => {
//             const urlMod = `${url}/${id}`

//             await fetch(urlMod, {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(item)
//             })
//         }

//         deleteFetch()
//     }, [url, id, item])
    

//   return (
//     console.log("deletado!")
//   )
// }
