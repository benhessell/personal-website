import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

export default function StructuredList(props) {

    const mobileBreakPoint = 800;
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < mobileBreakPoint);
    const breakpoint = `(max-width: ${mobileBreakPoint}px)`;

    const {
        data,
        columns,
        boxed,
        light,
        small,
        flat,
        neverFlat,
        verticalAlignMiddle,
        id,
        className,
        ...extraProps
    } = props;

    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.matchMedia(breakpoint).matches);
        };
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const componentClass = classnames(
        'ds-structured-list',
        {
            'ds-structured-list--mobile': isMobileView && !neverFlat,
            'ds-structured-list--small': small,
            'ds-structured-list--boxed': boxed,
            'ds-structured-list--light': light,
            'ds-structured-list--flat': flat,
            'ds-structured-list--vertical-align-middle': verticalAlignMiddle,
        },
        className
    );
    
    let content;

    if (!neverFlat && (isMobileView || flat)) {
        content = data && (
            <div
                id={id}
                className="ds-structured-list-container"
                {...extraProps}
            >
                {data.map((row, rowIdx) => (
                    <section
                        className={componentClass}
                        key={rowIdx}
                    >
                        <div className="ds-structured-list__tbody">
                            {row.map((col, colIdx) => (
                                <div className="ds-structured-list__tr" key={columns[colIdx] || colIdx}>
                                    <div className="ds-structured-list__td">
                                        {columns[colIdx]}
                                    </div>
                                    {(typeof col === 'string') ? (
                                        <div
                                            className="ds-structured-list__td"
                                            dangerouslySetInnerHTML={{ __html: col }}
                                        />
                                    ) : (
                                        <div className="ds-structured-list__td">
                                            {col}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        );
    } else {
        const headContent = columns && (
            <thead className="ds-structured-list__thead">
                <tr className="ds-structured-list__tr">
                    {columns.map((column) => (
                        <th className="ds-structured-list__th" key={column} scope="col">
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
        );
        const bodyContent = data && (
            <tbody className="ds-structured-list__tbody">
                {data.map((row, rowIdx) => (
                    <tr
                        className="ds-structured-list__tr"
                        key={rowIdx}
                    >
                        {row.map((col, colIdx) => (
                            <React.Fragment key={columns[colIdx] || colIdx}>
                                {(typeof col === 'string') ? (
                                    <td
                                        className="ds-structured-list__td"
                                        dangerouslySetInnerHTML={{ __html: col }}
                                    />
                                ) : (
                                    <td className="ds-structured-list__td">
                                        {col}
                                    </td>
                                )}
                            </React.Fragment>
                        ))}
                    </tr>
                ))}
            </tbody>
        );

        content = (
            <table
                className={componentClass}
                {...extraProps}
            >
                {headContent}
                {bodyContent}
            </table>
        );
    }

    return content;
}