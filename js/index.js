



const loadVideos = async () => {
    const rec = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await rec.json()
    const newses = data.posts
    // console.log(newses)
    displaynews(newses)
}

const displaynews = (newses) => {
    const containtDetails = document.getElementById("containt-details")

    newses.forEach(news => {
        // console.log(news)
        const NewsCard = document.createElement('div')
        // NewsCard.classList=` `
        NewsCard.innerHTML = `
    
        <div class="flex 
      bg-[#F3F3F5] rounded-2xl p-10 mb-5">
            <div class="w-[10%]">
                <div class="avatar online placeholder ">
                    <div class="bg-neutral text-neutral-content rounded-full w-16">
                    <img src="${news.image
            }" alt="">
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex gap-6 justify-start">
                    <p class="text-sm text-slate-500"># ${news.category}</p>
                    <p class="text-sm text-slate-500">Author : ${news.author.name}</p>
                </div>
                <div class="">
                    <h3 class="mt-5 text-xl font-bold">${news.title}</h3>
                    <p class="mt-5 text-slate-500">${news.description}</p>
                </div>
                <hr class="mt-5 border-black">
                <div class="flex justify-between mt-5">
                    <div class=" grid grid-cols-3 gap-8">
                    <div class="flex "> 
                    <img src="image/tabler-icon-message-2.svg" alt="">
                    <p>${news.comment_count}</p>   
                    </div>
                    <div class="flex "> 
                    <img src="image/tabler-icon-eye.svg" alt=""> 
                    <p>${news.view_count}</p>  
                    </div>
                    <div class="flex "> 
                    <img src="image/tabler-icon-clock-hour-9.svg" alt="">
                    <p>${news.posted_time} min </p>   
                    </div>
                    </div>
                    <button><img src="image/email 1.svg" alt=""></button>
                </div>


            </div>
        </div>`
        containtDetails.appendChild(NewsCard)
    })
}
const loadNewPost =async ()=>{
  const rec = await  fetch`https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  const newPosts = await rec.json()
//   console.log(newPost)
displayNewPost(newPosts)

}
const displayNewPost =(newPosts)=>{
    const newPostContainer =document.getElementById('new-post-container')
    newPosts.forEach(newse=>{
        console.log(newse)
    const newPostCard = document.createElement('div')
    newPostCard.classList='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
       newPostCard.innerHTML=`<div class="card w-96 bg-base-100 shadow-xl">
       <figure class="px-10 pt-10">
           <img src="${newse.cover_image}" alt="Shoes"
               class="rounded-xl" />
       </figure>
       <div class="card-body items-start text-start">
           <div class="flex">
               <img src="image/calenderr.svg" alt="">
               <p>${newse.author.posted_date}</p>
           </div>
           <h2 class="card-title">${newse.title}</h2>
           <p>${newse.description} </p>
           <div class="flex items-center gap-2">
           <div class="avatar">
           <div class="w-20 rounded-full">
             <img src="${newse.profile_image}" />
           </div>
         </div>
               <div>
                   <h2 class="text-xl font-medium">${newse.author.name}</h2>
                   <p>${newse.author.designation}</p>
               </div>
           </div>
       </div>
   </div>`
   newPostContainer.appendChild(newPostCard)
    })
}

loadNewPost()


loadVideos()