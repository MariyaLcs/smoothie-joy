import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import smoothieDetails from '../api/smoothieDetails';
import styles from '../../styles/LearnNext.module.css';

export const getStaticPaths: GetStaticPaths = async () =>
{
    const paths = smoothieDetails.map((smoothie) => ({
        params: { name: smoothie.id },
    }));

    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) =>
{
    const smoothie = smoothieDetails.find((item) => item.id === params?.name);
    const imageUrl = `https://picsum.photos/seed/${params?.name}/600/400`;

    if (!smoothie)
    {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            smoothie,
            imageUrl,
        },
    };
};

interface SmoothieProps
{
    smoothie: {
        name: string;
        ingredients: string;
    };
    imageUrl: string;
}

const SmoothiePage = ({ smoothie, imageUrl }: SmoothieProps) =>
{
    const router = useRouter();

    return (
        <div className={ styles.container }>
            <a href="#" onClick={ () => router.back() } className={ styles.backButton }>Back</a>
            <h1 className={ styles.title }>Get tips on how to make { smoothie.name }</h1>
            <Image
                src={ imageUrl }
                alt={ smoothie.name }
                width={ 600 }
                height={ 400 }
                className={ styles.smoothieImage }
            />
            <h2 className={ styles.subTitle }>Ingredients:</h2>
            <p className={ styles.ingredients }>{ smoothie.ingredients }</p>
        </div>
    );
};

export default SmoothiePage;
