import{s as a}from"./index-52e225e7.js";const i="/users/validate/_authenticate",r="/users/users",u=async(s,e)=>await a(i,"PATCH",s,e),l=async(s,e)=>{let n=null,t=null;return s!=null&&s.name&&(n?n=`${n}&name=${s.name}`:n=`name=${s.name}`),n?t=`${r}?${n}`:t=r,await a(t,"GET",s,e)},o=async(s,e)=>await a(r,"POST",s,e),$=async(s,e)=>await a(`${r}/${s.id}`,"PUT",s.body,e),m=async(s,e)=>await a(`${r}/${s}`,"DELETE",{},e);export{o as a,$ as b,m as d,l as g,u as p};
