let org_arr=[];  
let gen=document.querySelector('.met');
let n=10;
const def="lightblue";
const sect="lightpink";
const chg="rgb(166, 83, 57)";  
const cmp="lightgreen";
let delay=500;
const chng=document.querySelector('.head');
// window.onload=t();
    function t(){
  // size
  const speed=document.querySelector('#speed');
  const pt=document.querySelector('#pt');
  // pt.textContent=speed.value; 
  pt.textContent=speed.value+" ms"; 
  delay=parseInt(speed.value);
  const size=document.querySelector('#size');
  const ptt=document.querySelector('#ptt');
  ptt.textContent=size.value;
  n=parseInt(size.value);
//  kpp();
if(n!=org_arr.length){
  generate(); 
}
}
 t();
function reset(){
   location.reload();
}
// console.log(speed.value);  
function generate(){ 
   let gen=document.querySelector('.met');
    org_arr=[]; 
    // console.log();
   for(let i=0;i<n;i++){  
    //  const r=Math.floor(Math.random()*100+1);
    org_arr.push('<div class="bar" id="' + i + '" style=" height:' + Math.floor(2 + Math.random() * 98) + '%;"></div>');
      }
      // console.log(org_arr);
     gen.innerHTML=org_arr.join(' '); 
    }  
// generate();
// sleep
function sleep(ms){ 
  return new Promise(re=>{
    setTimeout(re,ms);
  })
}
// console.log(org_arr);
// bubble sort

async function bs(){
    dis();
 
   for(let i=0;i<n;i++){
    let bol=false;
    for(var j=0;j<n-i-1;j++){
  let cur_ind=org_arr[j].split(":")[1].split("%")[0];
   let next_ind=org_arr[j+1].split(":")[1].split("%")[0];
    let cur_id=org_arr[j].split('id="')[1].split('"')[0];
  let next_id=org_arr[j+1].split('id="')[1].split('"')[0];
   document.getElementById(cur_id).style.backgroundColor=chg;
   document.getElementById(next_id).style.backgroundColor=sect;
   await sleep(delay);
    if(parseInt(cur_ind)>parseInt(next_ind)){
        bol=true;
        [org_arr[j],org_arr[j+1]]=[org_arr[j+1],org_arr[j]];
        await sleep(delay);
        document.getElementById(cur_id).style.backgroundColor=cmp;
        document.getElementById(next_id).style.backgroundColor=cmp; 
        await sleep(delay);
        gen.innerHTML=org_arr.join(' ');
        //
       }
      //  await sleep(400);
   document.getElementById(cur_id).style.backgroundColor=chg;
   document.getElementById(next_id).style.backgroundColor=sect;
       await sleep(delay);
       document.getElementById(cur_id).style.backgroundColor=def;
       document.getElementById(next_id).style.backgroundColor=def;

    }
   if(!bol) break;
   } 
   Act();
  // gen.innerHTML=org_arr.join(' ');
}  
 async function mergesort(){
  dis();
  await merge(0,n-1); 
  Act();
 }   
async function merge(l,h){  
    if(l<h) { 
 let mid=Math.floor(l+(h-l)/2);
    // console.log(mid);
   await merge(l,mid);
   await merge(mid+1,h);
   await mg(l,mid,h);}   
 }  
 async function mg(l,m,h){
  let i=l;
  let j=m+1;
  while(i<j && j<=h){
    let cur_ind=org_arr[i].split(/[:%]/)[1];
    let next_ind=org_arr[j].split(/[:%]/)[1];
     let cur_id=org_arr[i].split('id="')[1].split('"')[0];
   let next_id=org_arr[j].split('id="')[1].split('"')[0];
    document.getElementById(cur_id).style.backgroundColor=chg;
    document.getElementById(next_id).style.backgroundColor=sect; 
  await sleep(delay); 
     if(parseInt(cur_ind)>=parseInt(next_ind)){
       re(i,j);
       i++;  j++;
   }else{
    i++;
   }
    await sleep(delay);
    gen.innerHTML=org_arr.join('');
    document.getElementById(cur_id).style.backgroundColor=sect;
    document.getElementById(next_id).style.backgroundColor=chg;
        await sleep(delay);
        document.getElementById(cur_id).style.backgroundColor=def;
        document.getElementById(next_id).style.backgroundColor=def;
  }
 }    
 function re(a,b){
  const tp=org_arr[b];
   for(let j=b-1;j>=a;j--){
     org_arr[j+1]=org_arr[j];
   }
   org_arr[a]=tp;
 }    
//  selection sort
async function selectionsort(){  
  dis();   
    for(let i=0;i<n;i++){  
      let cur_ind=parseInt(org_arr[i].split(":")[1].split('%')[0]);
      let cur_id=org_arr[i].split('id="')[1].split('"')[0];
      let p=i;
      document.getElementById(cur_id).style.backgroundColor=chg;
      await sleep(delay); 
      for(let j=i+1;j<n;j++){  
        let next_ind=parseInt(org_arr[j].split(":")[1].split('%')[0]);
        let next_id=org_arr[j].split('id="')[1].split('"')[0];
        document.getElementById(next_id).style.backgroundColor=sect;
        if(cur_ind>next_ind) { 
          cur_ind=next_ind;
          cur_id=next_id;   
          p=j;    
        }  
        await sleep(delay);
        document.getElementById(next_id).style.backgroundColor=def;
      } 
      await sleep(delay);
     [org_arr[i],org_arr[p]]=[org_arr[p],org_arr[i]];
     gen.innerHTML=org_arr.join(' ');
     console.log(org_arr);
    }
    Act();
} 
// insertion sort
async function insertionsort(){
  // console.log(org_arr);
  dis();
    for(let i=1;i<n;i++){
      let j=i-1;
      let cur_ind=parseInt(org_arr[i].split(':')[1].split('%')[0]);
      let cur_id=org_arr[i].split('id="')[1].split('"')[0];
      document.getElementById(cur_id).style.backgroundColor=chg;
      await sleep(delay);
      for( j=i-1;j>=0;j--){
        let next_ind=parseInt(org_arr[j].split(':')[1].split('%')[0]);
         let next_id=org_arr[j].split('id="')[1].split('"')[0];
        document.getElementById(next_id).style.backgroundColor=sect;
        await sleep(delay);
        if(cur_ind>next_ind)  break;
        document.getElementById(next_id).style.backgroundColor=def;
        [org_arr[j+1],org_arr[j]]=[org_arr[j],org_arr[j+1]];
        gen.innerHTML=org_arr.join(' ');
       }   
       j++;
      // console.log(j +" "+org_arr[j]); 
      gen.innerHTML=org_arr.join(' ');
    }
    Act();
}
// quick sort
 async function qs(){
  dis();
 await quick(0,n-1);
 Act();
} 

async function quick(l,h){
  if(l>=h) return;
  let st=l;
  let ed=h;
  let next_id=1;
  let mid=parseInt((l+h)/2);
  let cur_ind=parseInt(org_arr[mid].split(':')[1].split('%')[0]);
  let cur_id=org_arr[mid].split('id="')[1].split('"')[0];
  document.getElementById(cur_id).style.background=chg;
  await sleep(delay);
  console.log(cur_ind);
  while(l<=h){ 
    while(true){ 
        next_ind=parseInt(org_arr[l].split(':')[1].split('%')[0]);
      // console.log(next_ind+" "+cur_ind);
      if(cur_ind<=next_ind){
      break;
      }
      l++; }
       while(true){ 
          next_ind=parseInt(org_arr[h].split(':')[1].split('%')[0]);
        // console.log(next_ind+" "+cur_ind);
        if(cur_ind>=next_ind){
        break;
        }
        h--; }
         if(l<=h){
          let next_id=org_arr[l].split('id="')[1].split('"')[0];
          document.getElementById(next_id).style.background=sect;
          next_id=org_arr[h].split('id="')[1].split('"')[0];
          document.getElementById(next_id).style.background=sect;
          await sleep(delay);
          [org_arr[l],org_arr[h]]=[org_arr[h],org_arr[l]];
          gen.innerHTML=org_arr.join(' ');
          await sleep(delay);
          l++;
          h--;
        }
   }
  //  console.log(gen);
   document.getElementById(cur_id).style.background=def;
  gen.innerHTML=org_arr.join(' ');
  await quick(st,h);
  await quick(l,ed);
}  
function dis(){
  const bt=document.getElementsByTagName('button');
  for(let i=0;i<bt.length-1;i++){
    bt[i].disabled=true;
  }
  const pp=document.getElementsByTagName('input');
  for(let i=0;i<pp.length;i++){
    pp[i].disabled=true;
  }
  console.log(pp);
}
function Act(){
  const bt=document.getElementsByTagName('button');
  for(let i=0;i<bt.length-1;i++){
    bt[i].disabled=false;
  }
  const pp=document.getElementsByTagName('input');
  for(let i=0;i<pp.length;i++){
    pp[i].disabled=false;
  }
  // console.log(bt);
}  