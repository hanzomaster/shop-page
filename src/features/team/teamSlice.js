import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMembersContent = createAsyncThunk('/leads/content', async () => {
    const response = await axios.get('/api/users?page=2');
    return response.data;
});

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        isLoading: false,
        members: [],
    },
    reducers: {
        addNewMember: (state, action) => {
            let { newLeadObj: newMemberObj } = action.payload;
            state.members = [...state.members, newMemberObj];
        },

        deleteMember: (state, action) => {
            let { index } = action.payload;
            state.members.splice(index, 1);
        },
    },

    extraReducers: {
        [getMembersContent.pending]: state => {
            state.isLoading = true;
        },
        [getMembersContent.fulfilled]: (state, action) => {
            state.members = action.payload.data;
            state.isLoading = false;
        },
        [getMembersContent.rejected]: state => {
            state.isLoading = false;
        },
    },
});

export const { addNewMember, deleteMember } = teamSlice.actions;

export default teamSlice.reducer;
