import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch all users
export const fetchUsers = createAsyncThunk('fetchUsers', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("https://66e9ba1587e41760944a8ae0.mockapi.io/redux/curd/curd");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Create new user
export const createUser = createAsyncThunk('createUser', async (newUser, { rejectWithValue }) => {
    try {
        const response = await fetch("https://66e9ba1587e41760944a8ae0.mockapi.io/redux/curd/curd", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Update user
export const updateUser = createAsyncThunk('updateUser', async ({ id, ...updatedUser }, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://66e9ba1587e41760944a8ae0.mockapi.io/redux/curd/curd/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


// Delete user
export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://66e9ba1587e41760944a8ae0.mockapi.io/redux/curd/curd/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return id; // Return the ID to remove it from state
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


// Slice ------------------------------------------------------------------------------------------
const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        // fetch all users
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false;
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // create new user
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload); // Add new user to the state
            state.isError = false;
        });
        builder.addCase(createUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // update user
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            const index = state.data.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload; // Update the user in state
            }
            state.isError = false;
        });
        builder.addCase(updateUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // delete user
        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(user => user.id !== action.payload); // Remove user by ID
            state.isError = false;
        });
        builder.addCase(deleteUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default userSlice.reducer;
