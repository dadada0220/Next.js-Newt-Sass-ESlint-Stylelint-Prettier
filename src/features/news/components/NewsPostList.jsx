/**
 * ニュースの投稿一覧
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsPostList.module.scss';

export default function NewsPostList({ newsPostList }) {
  return (
    <>
      <div className={styles.NewsPostList}>
        {newsPostList.map(({ title, slug, meta, body, coverImage, categories }, _index) => (
          <article
            className={styles.NewsPostList__item}
            key={slug}
          >
            <Link
              className={styles.NewsPostList__link}
              href={`/news/${slug}`}
            >
              <h3 className={styles.NewsPostList__title}>{title}</h3>
              {coverImage && (
                <div className={styles.NewsPostList__thumb}>
                  <Image
                    src={coverImage.src}
                    alt=''
                    width='200'
                    height='100'
                    priority={_index < 8 ? true : false} // ファーストビューの投稿画像は優先的に読み込む
                  />
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
