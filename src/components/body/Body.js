import data from '../../helper/data';

function Body (){

    const arr=data.map((item, i)=>
            <div id={i} className="card" onClick={()=>toggle(i)} >
                
                    <div className="front">
                            <img src={item.img} alt=""/>
                            <p>{item.name}</p>
                    </div>
                    <ul>
                        {item.options.map((optionsitem, j)=>{
                            return(
                                    <li key={j} className="options">{optionsitem}</li>
                                )                     
                        })}
                    </ul>
            </div>
    );

    const visibility=["none", "block"];
    
    function toggle(i){
        let front=document.getElementById(i).childNodes[0];
        let reverse_visible = front.offsetWidth >0 ? 0 : 1;
        front.style.display=visibility[reverse_visible];
    }
    
    return(
        <div className="container">
            <h1>Languages</h1>
            {arr}
        </div>
    )

}

export default Body;

// data.map((item, i)=>{
//     return(
//         <div id={i} className="card" onClick={()=>setSide(!side)}>
//             {
//                 side==1 ?
//                     /*BURADAKİ ELEMANLARI DİVLE WRAPLEMEZSEK TERNARY FONKSİYONU HATA VERİR*/ 
//                     <div>
//                         <img src={item.img} alt=""/>
//                         <p>{item.name}</p>
//                     </div>
//                 :
//                 <ul>
//                     {item.options.map((optionsitem)=>{
//                         return(
//                                 <li className="options">{optionsitem}</li>
                            
//                             )
//                     })}
//                 </ul>
//             }
//         </div>
//     );
// })