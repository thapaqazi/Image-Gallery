const mainImg=document.querySelector('.mainImg img');
const smallImages = document.querySelectorAll('.flexible div img');

for(let i=0;i<smallImages.length;i++)
{
    smallImages[i].addEventListener('click',function(){
        mainImg.setAttribute('src',smallImages[i].src);
    });
}
