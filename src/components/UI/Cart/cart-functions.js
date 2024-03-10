
const email = localStorage.getItem('reactAuthEmail');


const getCart = async () => {
    try{
        const res = await fetch(`https://crudcrud.com/api/d14db4a499b14ecaa8931aaad4441a19/cart${email}`);
        if(!res.ok)
            throw new Error(res);

        const resData = await res.json();
        return resData;
    }
    catch(err){
        console.log(err);
    }
}
const postCart = async (cartItem) => {
    try{
        const res = await fetch(`https://crudcrud.com/api/d14db4a499b14ecaa8931aaad4441a19/cart${email}`,{
            method: 'POST',
            body: JSON.stringify({...cartItem}),
            headers: {
                'Content-Type': 'Application/json',
            }
        });
        if(!res.ok){
            throw new Error(res);
        }
        const resData = await res.json();
        return resData;
    }
    catch(err){
        console.error(err);
    }
}

const deleteItem = async (id) => {
    try{
        const res = await fetch(`https://crudcrud.com/api/d14db4a499b14ecaa8931aaad4441a19/cart${email}/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        if(!res.ok){
            throw new Error('something went wrong');
        }
    }
    catch(err){
        console.error(err.message);
    }
}



module.exports = {
    postCart,
    getCart,
    deleteItem,
}