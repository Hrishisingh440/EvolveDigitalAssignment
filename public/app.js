const first=document.getElementById('first')
const second=document.getElementById('second')
const third=document.getElementById('third')
const fourth=document.getElementById('fourth')
const fifth=document.getElementById('fifth')
const form=document.getElementById('form')
const d= document.getElementById('data')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let a=[first.value,second.value,third.value,fourth.value,fifth.value]
    console.log(a)
    fetch('/?a='+a[0]+'&b='+a[1]+'&c='+a[2]+'&d='+a[3]+'&e='+a[4]).then((response)=>{
        d.innerHTML=response
            

        
    })
       
})
