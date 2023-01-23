/**
 * ニュースの詳細
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsPostDetail.module.scss';

export default function NewsPostDetail({ news }) {
  const { title, body, categories, coverImage, _sys } = news;
  const { name: categoryName, slug: categorySlug } = categories[0];
  const getPublicDate = () => {
    const date = new Date(_sys.createdAt);
    const y = date.getFullYear();
    const m = ('00' + (date.getMonth() + 1)).slice(-2);
    const d = ('00' + date.getDate()).slice(-2);
    return `${y}/${m}/${d}`;
  };
  const publicDate = getPublicDate();

  return (
    <>
      <article className={styles.article}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            <time
              dateTime={_sys.createdAt}
              className={styles.date}
            >
              {publicDate}
            </time>
            <div className={styles.category}>
              <Link href={`/news/category/${categorySlug}`}>{categoryName}</Link>
            </div>
          </div>
        </div>
        {coverImage && (
          <div className={styles.thumb}>
            <Image
              src={coverImage.src}
              alt=''
              width='600'
              height='400'
              priority={true}
            />
          </div>
        )}
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      </article>
    </>
  );
}
