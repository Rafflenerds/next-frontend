import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import PrimaryButton from "@/components/PrimaryButton.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SecondaryButton from "@/components/SecondaryButton.tsx";
import iconCoin from "@/assets/iconCoin.svg";
import iconDropdown from "@/assets/iconDropdown.svg"
import {Input} from "@/components/ui/input.tsx";
import {DefaultPage} from "@/components/DefaultPage.tsx";
import Image from "next/image";

export default function Credits() {
    return (
        <DefaultPage>
            <Header/>
            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="font-block text-2xl text-secondary mb-8">Credits</h1>

                {/*box*/}
                <div className="flex flex-col items-center justify-center border border-primary rounded-xl py-8 px-10 max-w-[45rem] w-full">
                    <div className='flex justify-end w-full'>
                        <Image src={iconCoin} alt='Coin Icon'/>
                        <p className='text-primary font-mono ml-2 text-2xl'>999</p>
                    </div>

                    {/*buy and redeem*/}
                    <div className='flex justify-between w-full p-y2 mt-5'>
                        <PrimaryButton active={true} name='Buy Credits'/>
                        <SecondaryButton name='Redeem Credits' className='py-0 text-primary'/>
                    </div>

                    {/*amount and currency*/}
                    <div className='flex justify-between border border-primary rounded-2xl w-full px-6 py-5 my-5'>
                        {/*<p className='text-white font-block'>500</p>*/}
                        <Input className='text-white font-block !border-none focus-visible:border-none focus-visible:ring-0 text-xl w-2/5' type="number" defaultValue={500} />

                        <DropdownMenu>
                            <DropdownMenuTrigger className='text-secondary font-block text-xs flex my-auto'>
                                USDT
                                <Image className='my-auto ml-2' src={iconDropdown} alt='Dropdown'/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Token</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>ETH</DropdownMenuItem>
                                <DropdownMenuItem>USDC</DropdownMenuItem>
                                <DropdownMenuItem>USDT</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/*network and fees*/}
                    <div className='flex justify-between border border-primary border-dashed rounded-3xl w-full px-8 py-3 mb-5'>
                        <p className='text-white font-regular'>Est total fees: $2.96</p>

                        <DropdownMenu>
                            <DropdownMenuTrigger className='text-primary font-block text-sm flex my-auto'>
                                Polygon
                                <Image className='my-auto ml-2' src={iconDropdown} alt='Dropdown'/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Network</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>ETH Mainnet</DropdownMenuItem>
                                <DropdownMenuItem>Polygon</DropdownMenuItem>
                                <DropdownMenuItem>Base</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <PrimaryButton active={true} className='mb-8 py-6 px-12 mt-3 text-[1rem]'  name='Buy Credits'  />
                    <p className='text-white font-regular mb-10 text-xl'>By continuing you agree to our <a href='#' className='text-primary'>terms and services</a></p>
                </div>
            </div>

            <Footer className='mb-10'/>
        </DefaultPage>
    );
}
