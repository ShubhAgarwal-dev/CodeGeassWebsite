import AppBar from '@/components/AppBar/AppBar'
import Footer from '@/components/Footer/Footer'
import Block from '@/components/Block/Block'
import data from './data'

export default function Project () {
    return (
        <>
        <AppBar />
        <Block title='Projects' blocksData={data} />
        <Footer />
        </>
    )
}