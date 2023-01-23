/**
 * ニュースの投稿一覧
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsPostList.module.scss';

export default function NewsPostList({ newsPostList }) {
  return (
    <>
      <div className={styles.newsList}>
        {newsPostList.map(({ title, slug, meta, body, coverImage, categories }, _index) => (
          <article
            className={styles.item}
            key={slug}
          >
            <h3 className={styles.title}>
              <Link href={`/news/article/${slug}`}>{title}</Link>
            </h3>
            {coverImage && (
              <div className={styles.thumb}>
                <Link href={`/news/article/${slug}`}>
                  <Image
                    src={coverImage.src}
                    alt=''
                    width='200'
                    height='100'
                    priority={_index < 8 ? true : false} // ファーストビューの投稿画像は優先的に読み込む
                  />
                </Link>
              </div>
            )}
            <div className={styles.meta}>
              <Link
                href={`/news/${categories[0].slug}`}
                className={styles.category}
              >
                {categories[0].name}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
