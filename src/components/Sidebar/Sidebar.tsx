import './Sidebar.scss';

function Sidebar(props: any) {
    return (
        <aside className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__head">
                    <h1 className="sidebar__title">
                        Survey maker
                    </h1>
                </div>
                <div className="sidebar__body">
                    {props.question}
                </div>
                <div className="sidebar__footer">
                    <button className="sidebar__button">Закончить</button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;