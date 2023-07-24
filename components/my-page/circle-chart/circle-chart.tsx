import { Center } from '@/components/share';
import Image from 'next/image';

export function CircleChart() {
    return (
        <Center className="relative w-[180px] h-[180px]">
            {/* <Image
               
                src="/images/circle-chart.svg"
                width={180}
                height={180}
                alt=""
            /> */}

            <div className="absolute">
                <svg className="svg-pi svg-pi-25 ">
                    <circle className="svg-pi-track" />
                    <circle
                        filter="url(#filter0_d_0_94)"
                        className="svg-pi-indicator"
                        style={{
                            strokeDashoffset: 135,
                        }}
                    />

                    <defs>
                        <filter
                            id="filter0_d_0_94"
                            x="-6"
                            y="-6"
                            width="193"
                            height="193"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="3" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.988235 0 0 0 0 0.454902 0 0 0 0 0 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_0_94"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_0_94"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="text-light flex justify-end items-end gap-2">
                <span className="text-lg">05 / 21</span>
                <span className="text-[25px]">75%</span>
            </div>
        </Center>
    );
}
