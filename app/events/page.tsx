import AppBar from '@/components/AppBar/AppBar'
import Footer from '@/components/Footer/Footer'
import data from './data'
import Block from '@/components/Block/Block'

export default function Members () {
    return (
        <>
        <AppBar />
        <Block title="Events" blocksData={data}/>
        <Footer />
        </>
    )
}