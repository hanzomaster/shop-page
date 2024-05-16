import TitleCard from '../../../components/Cards/TitleCard';

const userSourceData = [
    { source: 'Sườn xào chua ngọt', count: '235', revenue: '10.200.000' },
    { source: 'Cơm trắng', count: '341', revenue: '10.200.000' },
    { source: 'Canh giá', count: '379', revenue: '10.200.000' },
    { source: 'Ghẹ hấp', count: '359', revenue: '10.200.000' },
    { source: 'Tôm luộc', count: '1345', revenue: '10.200.000' },
    { source: 'Tôm luộc', count: '1345', revenue: '10.200.000' },
    { source: 'Tôm luộc', count: '1345', revenue: '10.200.000' },
    { source: 'Tôm luộc', count: '1345', revenue: '10.200.000' }
];

function UserChannels() {
    return (
        <TitleCard title={'Món bán chạy'}>
            {/** Table Data */}
            <div className="overflow-x-auto overflow-y-scroll h-64">
                <table className="table w-full overflow-y-scroll">
                    <thead className=''>
                        <tr>
                            <th></th>
                            <th className="normal-case">Món</th>
                            <th className="normal-case">Lượt gọi</th>
                            <th className="normal-case">Doanh thu</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {userSourceData.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <th>{k + 1}</th>
                                    <td>{u.source}</td>
                                    <td>{u.count}</td>
                                    <td>{`${u.revenue} VNĐ`}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </TitleCard>
    );
}

export default UserChannels;
