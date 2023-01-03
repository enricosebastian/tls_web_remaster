import Link from "next/link";
import styles from '../styles/Home.module.scss';

export default function PrimaryArticle({article}) {
    return (
            <div className={styles.primary}>
                <div className={styles.card}>
                    
                    <Link className={styles.articleLink} href={`/presents/${article.slug}`}>
                        <div className={styles.content}>
                            {/* We have to use divs here and not p, h1, and other text components or else you'll cause hydration errors */}
                            <div className={styles.headline} dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
                            <div className={styles.author}>by me</div>
                            <div className={styles.snippet} dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}/>
                        </div>
                    </Link>
                    <img className={styles.img} src={article.jetpack_featured_media_url} />
                </div>
            </div>
        
    );
}

{/* <div className={styles.primaryCard}>
    <div className={styles.primaryCardShade}/>
    <img className={styles.primaryImg} src={article.jetpack_featured_media_url} />
    <Link className={styles.primaryLink} href={`/presents/${article.slug}`}>
        <div className={styles.cardContainer}>
            <h1 className={styles.cardH1} dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
            <p className={styles.cardAuthors}>by you</p>
            <p className={styles.cardExcerpt} dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}/>
        </div>
    </Link>
</div> */}