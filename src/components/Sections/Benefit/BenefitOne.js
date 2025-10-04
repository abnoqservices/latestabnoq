import * as Icon from "@phosphor-icons/react/dist/ssr"
import React from "react"

const BenefitOne = ({ classname, data, start, limit }) => {
    return (
        <section className={`section-benefit ${classname}`}>
            <div className="container">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[30px]">
                    {data.slice(start, limit).map((item, index) => (
                        <div className="benefit-item" key={index}>
                            <div className="block-icon">
                                {Icon[item.icon] && React.createElement(Icon[item.icon], { className: 'text-4xl' })}
                            </div>
                            <div className="heading6 sm:mt-4 mt-2">{item.title}</div>
                            <div className="text-surface1 mt-2" style={{ whiteSpace: "pre-line" }}>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitOne
