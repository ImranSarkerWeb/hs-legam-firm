import Cart from "../../Card/Cart";


const TeamMemberCart = () => {
    const data = [
        {   
            id:'1',
            name:'Jonson Lio',    
            email:'jonson@gamil.com',
            facebook:'Jonson Lio',
            number:'+8801712829766',
            imgUrl:'https://demo.casethemes.net/lawsight/wp-content/uploads/2019/03/team1.jpg'
        },
        {   
            id:'2',
            name:'Mostofa Amin',    
            email:'mostofa@gmail.com',
            facebook:'Mostofa',
            number:'+8801314568926',
            imgUrl:'https://demo.casethemes.net/lawsight/wp-content/uploads/2019/03/team2.jpg'
        },
        {   
            id:'3',
            name:'Neobir For',    
            email:'neobir@gmail.com',
            facebook:'Neobir For',
            number:'+8801314568925',
            imgUrl:'https://demo.casethemes.net/lawsight/wp-content/uploads/2019/03/team3.jpg'
        },
        {   
            id:'4',
            name:'Armor Byron',    
            email:'armor@gmail.com',
            facebook:'Armor Byron',
            number:'+8801314568925',
            imgUrl:'https://demo.casethemes.net/lawsight/wp-content/uploads/2019/03/team4.jpg'
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center bg-assh">
            {
                data.map(({name,email,facebook,number,imgUrl,id})=>(
                    <Cart key={id} img={imgUrl} name={name} fb={facebook} email={email} number={number} />
                ))
            }
        </div>
    );
};

export default TeamMemberCart;