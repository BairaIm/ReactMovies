import React from "react";

class Pagination  extends React.Component {
    state = {
        page: this.props.page || 1,
    }

    render() {
        const { totalResults, type, caption, searchForCaption } = this.props;

        let pagination = [];
        const countPages = Math.floor(+totalResults / 10) + 1 || 0;

        if (countPages < 10) {
            for (let i = 1; i <= Math.floor(+totalResults / 10) + 1; i++) {
                pagination.push(`${i}`);
            }
        } else {
            pagination.push('1');
            pagination.push('2');

            if (+this.state.page > 5) {
                pagination.push('...')
            }

            for (let i = -2; i <= 2; i++) {
                if (+this.state.page + i <= 2 || +this.state.page + i >= countPages - 1) {
                    continue;
                }
                pagination.push(`${+this.state.page + i}`)
            }

            if (+this.state.page < countPages - 3) {
                pagination.push('...')
            }

            pagination.push(`${countPages - 1}`);
            pagination.push(`${countPages}`);
        }

        return <div className="pages">
            { pagination.map((page) => {
            return page==='...' 
                ? <p className='three-dots' key={`threeDots_${Math.random()}`}> ...</p>
                : <div key={`page_${page}`}>
                    <input
                        type="radio"
                        id={page}
                        className="page-input"
                        name="page"
                        value={page}
                        checked={page===this.state.page}
                        onChange={(e) => this.setState(() => ({page: e.target.value}),
                                                    () => searchForCaption(caption, type, page))}
                    />
                    <label
                        htmlFor={page}
                        className="page-label"
                    >{page}</label>
                </div>
            }) }
        </div>
    }
}

export { Pagination };