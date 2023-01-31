import classes from '../Layout/Cover.module.css'
const Cover = (probs:any) => {
    return ( <div className={classes.parents}>
    <main className={classes.detail}>
        {probs.children}
    </main>
</div>  );
}
 
export default Cover;